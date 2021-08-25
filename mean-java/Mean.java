public class Mean {
    // testing
    public static void main(String[] args) {
        float[] nilai = {90,20,10,20,30,20,10};
        rataRata(nilai);
    }
    // mean function
    public static void rataRata(float[] value){
        int n = value.length;
        float temp = 0;
        for(int i = 0; i < n; i++){
            temp += value[i];
        }

        float mean = temp/n;

        System.out.println("rata-rata : " + mean);
    }
}
