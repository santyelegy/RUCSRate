
public class jsoup {
    public void write() throws Exception {
        Document document = Jsoup.connect();
        String title -document.title();
        String content = document.getElementById("endText").text();
        File file = new File();
        BufferedWriter bw = new BufferedWriter(new FileWriter(file));
        bw.write(content);
        bw.close();
        System.out.println("Done");
    }
}