import java.io.*;
import java.util.Arrays;

public class ECE_Description {

    public static void main(String[] args) throws IOException {
        try{
            BufferedReader in=new BufferedReader(new FileReader("ECEdesp.txt"));//打开文件创建数据流
            String str; 
            String[] code=new String[0];
            String[] course=new String[0];
            String[] Desp=new String[0];
            int index=0;

            /*对下面的数据进行筛选*/
            while((str=in.readLine())!=null){
                if(str.contains("Syllabus:")){continue;}
                if(str.contains("16:332:")&&str.contains("(3)")) {
                    code = Arrays.copyOf(code, code.length + 1);  //扩容  如果对内存没有要求可以直接声明一个大容量的数组
                    course = Arrays.copyOf(course, course.length + 1);  //扩容  如果对内存没有要求可以直接声明一个大容量的数组
                    Desp=Arrays.copyOf(Desp,Desp.length+1);

                    code[code.length - 1] = str.substring(0, 10);//获取子串保存到数组中

                    if((str.contains("(F)")||str.contains("(S)"))&&!str.contains("Section")){
                        str = str.substring(15, str.length()-4);
                    }else if(str.contains("Section")){
                        str = str.substring(26, str.length()-4);
                    }else{
                        str = str.substring(11, str.length()-4);
                    }

                    course[course.length-1]=str;

                    index=1;
                } else if (index>0) {
                    index++;
                    if(index==2){
                        Desp[Desp.length-1]=str;
                        System.out.println(str);
                    } else if (index>1) {
                        Desp[Desp.length-1]+=" ";
                        Desp[Desp.length-1]+=str;
                    }
                    if(str==null){
                        index=0;
                    }
                }


            }
            in.close();

            FileWriter f = new FileWriter("Description_ECE.txt", false);
            PrintWriter Out = new PrintWriter(f);

            for(int i=0;i<code.length;i++){
                Out.print(code[i]+"\n");
                Out.flush();//打印输出
                Out.print(course[i]+"\n");
                Out.flush();//打印输出
                Out.print("Electrical and Computer Engineering"+"\n");
                Out.flush();//打印输出
                Out.print(Desp[i]+"\n");
                Out.flush();//打印输出
                Out.print("\n");
                Out.flush();//打印输出
            }

        } catch (IOException e) {
        }
    }
}