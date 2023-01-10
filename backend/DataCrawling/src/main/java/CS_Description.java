import jdk.jfr.Description;
import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.io.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class CS_Description {

    public static Map<String, String> cookies = new HashMap<String, String>(); // cookie

    static {
        cookies.put("cookie_name", "cookie_value");
    }

    public static void main(String[] args) throws IOException {
        try{
            BufferedReader in=new BufferedReader(new FileReader("CS_Des.txt"));//打开文件创建数据流
            String str;
            String[] web=new String[0];

            while((str=in.readLine())!=null){
                web=Arrays.copyOf(web,web.length+1);
                web[web.length-1]=str.substring(5,str.indexOf("^"));
            }
            in.close();

            File file = new File("Description_CS.txt");
            if(!file.exists())
                file.createNewFile();

            FileWriter f0 = new FileWriter("Description_CS.txt", false);
            PrintWriter p0 = new PrintWriter(f0);


            for(int i=0;i<web.length;i++){
                System.out.println(i);
                Connection.Response response = Jsoup.connect(web[i])
                        .cookies(cookies)
                        .postDataCharset("UTF-8")
                        .execute();

                File file1 = new File("output.txt");
                if(!file.exists())
                    file.createNewFile();

                FileWriter f1 = new FileWriter("output.txt", false);
                PrintWriter p1 = new PrintWriter(f1);
                String body = response.body();
                p1.println(body);
                p1.flush();

                BufferedReader in0=new BufferedReader(new FileReader("output.txt"));//打开文件创建数据流
                String str0;
                boolean index=false;

                p0.println(web[i]);
                p0.flush();


                while((str0=in0.readLine())!=null){
                    if(str0.contains("Description:")){
                        index=true;
                        continue;
                    }
                    if(index==true){
                        if(str0.contains("</li>")){
                            p0.println("\n");
                            p0.flush();
                            break;
                        }else{
                            p0.println(str0);
                            p0.flush();
                        }
                    }
                }

            }

        } catch (IOException e) {
        }
    }
}
