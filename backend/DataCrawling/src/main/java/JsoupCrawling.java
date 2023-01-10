/**
 *  通过Jsoup的connect方法获取Connection对象
 *  再用Connection对象的execute方法获取Connection.Response对象
 *  使用Response对象，即可获取html原始文本内容
 */

import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

public class JsoupCrawling {
    public static final String WEBSITE = "https://www.cs.rutgers.edu/academics/graduate/m-s-program/course-synopses/course-details/16-198-514-design-and-analysis-of-data-structures-and-algorithms-ii";
    // 站点URL，注意要加上协议(http://)

    public static Map<String, String> cookies = new HashMap<String, String>(); // cookie

    static {
        cookies.put("cookie_name", "cookie_value");
    }
    // 初始化cookie

    public static void main(String[] args) throws IOException {

        File file = new File("output.txt");
        if(!file.exists())
            file.createNewFile();

        FileWriter f0 = new FileWriter("output.txt", false);
        PrintWriter p0 = new PrintWriter(f0);
        p0.print("Here are the courses:\n\n");
        p0.flush();

        FileWriter f1 = new FileWriter("output.html", false);
        PrintWriter p1 = new PrintWriter(f1);
        p1.print("Here are the courses:\n\n");
        p1.flush();

        try {
            Connection.Response response = Jsoup.connect(WEBSITE)
                    .cookies(cookies)
                    .postDataCharset("UTF-8")
                    .execute();
            String body = response.body(); // 获取html原始文本内容
            p0.println(body);
            p0.flush();
            p1.println(body);
            p1.flush();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }



}