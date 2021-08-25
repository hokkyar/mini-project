public class BubbleSorting {
    // testing 
    public static void main(String[] args) {
        int[] arr = {7,3,6,9,10,0};
        bubbleSort(arr);
    }

    public static void bubbleSort(int[] arr){
        int n = arr.length;
        int temp;

        // ascending
//        for(int i = 0; i < n; i++){
//            for(int j = i+1; j < n; j++){
//                if(arr[i] > arr[j]){
//                    temp = arr[i];
//                    arr[i] = arr[j];
//                    arr[j] = temp;
//                }
//            }
//        }
        // descending
        for(int i = 0; i < n; i++){
            for(int j = i+1; j < n; j++){
                if(arr[i] < arr[j]){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        // display
        print(arr);
    }
    // print array
    public static void print(int[] nums){
        for(int num : nums){
            System.out.print(num + " ");
        }
    }
}
