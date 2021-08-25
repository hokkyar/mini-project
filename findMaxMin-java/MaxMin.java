public class MaxMin {
    // testing
    public static void main(String[] args) {
        int[] value = {10,90,200,80,100,0,30};
        System.out.println("Max : " + findMax(value));
        System.out.println("Min : " + findMin(value));
    }
    // find max value
    public static int findMax(int[] arr){
        int max = arr[0];
        for(int i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        return max;
    }
    // find min value
    public static int findMin(int[] arr){
        int min = arr[0];
        for(int i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }
}
