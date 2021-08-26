package TwoSum;
import java.util.HashMap;

public class Main {
    // testing
    public static void main(String[] args) {
        int[] nums = {2,7,11,15};
        int target = 9; // the output will be {0,1} because nums[0] + nums[1] = 9
    }

    // twoSum using hashMap
    public static int[] twoSum(int[] nums, int target){
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            int complement = target - nums[i];
            if(map.containsKey(complement)){
                int toReturn[] = {map.get(complement), i};
                return toReturn;
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("There's no two sum");
    }
}
