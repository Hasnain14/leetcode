
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class P1431 {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int maxCandies = candies[0];
        for (int candy : candies) {
            if (candy > maxCandies) {
                maxCandies = candy;
            }
        }
//        System.out.println(maxCandies);
        List<Boolean> result = new ArrayList<>();
        for(int candy : candies){
            if(candy + extraCandies >= maxCandies){
                result.add(true);
            }else {
                result.add(false);
            }
        }
        return result;

    }

    public  static  void main(String[] args){
        P1431 p1431 = new P1431();
        int[] candies = {2,3,5,1,3};
        int extraCandies = 3;

        List<Boolean> result = p1431.kidsWithCandies(candies,extraCandies);
        System.out.println(result);
    }
}
