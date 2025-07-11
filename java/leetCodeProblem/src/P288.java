import java.util.ArrayList;
import java.util.List;

public class P288 {

        public List<String> summaryRanges(int[] nums) {
            List<String> result = new ArrayList<>();
            if (nums.length == 0) return result;

            int start = nums[0];
            for (int i = 1; i <= nums.length; i++) {
                if (i == nums.length || nums[i] != nums[i - 1] + 1) {
                    if (start == nums[i - 1]) {
                        result.add(String.valueOf(start));
                        start = nums[i];
                    } else {
                        result.add(start + "->" + nums[i - 1]);
                        if(i < nums.length){
                        start = nums[i];
                        }
                    }
                }
            }
            return result;
        }


        public static void main(String[] args) {
            P288 solution = new P288();
            int[] nums = {0, 2,3, 4, 5, 6};


            List<String> result = solution.summaryRanges(nums);
            System.out.println(result);
        }
    }

