import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class P202 {
    public boolean isHappy(int n) {
        Set<Integer> tempCount = new HashSet<Integer>();
        while (!tempCount.contains(n)){
            tempCount.add(n);
            if(n == 1){
                return  true;
            }
            int tempSum = 0;
            while (n > 0 ){
                int digit = n % 10;
                tempSum += digit * digit;
                n = n / 10;
            }
            n = tempSum;
        }
        return  false;
    }

    public static void main(String[] args) {
        P202 solution = new P202();
        int nums = 19;


        boolean result = solution.isHappy(nums);
        System.out.println(result);
    }
}
