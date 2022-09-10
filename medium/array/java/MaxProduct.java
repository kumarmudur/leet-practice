//Topic: Array, Dynamic Programming

class Solution {
    public int maxProduct(int[] nums) {
        int max = nums[0], min = nums[0], product = max;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                // swap min and max
                int temp = max;
                max = min;
                min = temp;
            }
            max = Math.max(nums[i], nums[i] * max);
            min = Math.min(nums[i], nums[i] * min);
            if (product < max)
                product = max;
        }
        return product;
    }
}