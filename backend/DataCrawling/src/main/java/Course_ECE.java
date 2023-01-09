import java.io.*;
import java.util.Arrays;

public class Course_ECE {

    public static void main(String[] args) throws IOException {
        try{
            BufferedReader in=new BufferedReader(new FileReader("ECE_2023_Spring.txt"));//打开文件创建数据流
            String str; //定义String变量用来保存每一次读到的每一行的数据
            String[] code=new String[0];//定义数组用来保存需要的数据
            String[] course=new String[0];//定义数组用来保存需要的数据
            String[] prof=new String[0];//定义数组用来保存需要的数据

            /*对下面的数据进行筛选*/
            while((str=in.readLine())!=null){
                if(str.contains("16:332:")) {
                    code = Arrays.copyOf(code, code.length + 1);  //扩容  如果对内存没有要求可以直接声明一个大容量的数组
                    course = Arrays.copyOf(course, course.length + 1);  //扩容  如果对内存没有要求可以直接声明一个大容量的数组

                    code[code.length - 1] = str.substring(1, 11);//获取子串保存到数组中
                    str = str.substring(11, str.length());
                    int i = str.indexOf('3');
                    if (i > 0) {
                        course[course.length - 1] = str.substring(0, i);
                    }
                }
                else if(str.contains("BooksRegister")){
                    prof=Arrays.copyOf(prof,prof.length+1);
                    prof[prof.length-1]=str.substring(1,str.length()-13);
                    prof[prof.length-1]=prof[prof.length-1].replace(", "," ");
                }

            }
            in.close();

            FileWriter f = new FileWriter("Courses_ECE_2023_Spring.txt", false);
            PrintWriter Out = new PrintWriter(f);

            for(int i=0;i<code.length;i++){
                Out.print(code[i]+"\n");
                Out.flush();//打印输出
                Out.print(course[i]+"\n");
                Out.flush();//打印输出
                Out.print("Electrical and Computer Engineering"+"\n");
                Out.flush();//打印输出
                Out.print(prof[i]+"\n");
                Out.flush();//打印输出
                Out.print("\n");
                Out.flush();//打印输出
            }

        } catch (IOException e) {
        }
    }
}