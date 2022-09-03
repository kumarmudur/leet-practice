// Topic: Hash Table, String, Sorting

public class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        int[] counts = new int[26];
        int length = s.length();
        for (int i = 0; i < length; i++) {
            counts[s.charAt(i) - 'a']++;
            counts[t.charAt(i) - 'a']--;
        }

        for (int i : counts) {
            if (i != 0)
                return false;
        }
        return true;
    }
}