public class Median {
    // testing
    public static void main(String[] args) {
        int[] value = {1,3,5,2,4,6};
        System.out.println(getMedian(value));
    }
    // median method
    public static double getMedian(int[] value){
        // sebelum mencari median, kita harus sort dulu agar value terurut dari kecil ke besar (ascending)
        sort(value);
        if(value.length % 2 != 0){
            return (double) value[value.length/2];
        }else{
            return (double) (value[value.length/2] + value[value.length/2-1]) / 2;
        }

    }
    // sorting method
    public static void sort(int[] value){
        for(int i = 0; i < value.length; i++){
            for(int j = i+1; j < value.length; j++){
                if(value[j] < value[i]){
                    int temp = value[j];
                    value[j] = value[i];
                    value[i] = temp;
                }
            }
        }
    }
}
