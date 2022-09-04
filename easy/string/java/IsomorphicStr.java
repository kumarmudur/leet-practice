// Topic: Hash Table, String

class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s == null || t == null || s.length() != t.length())
            return false;
        int[] map1 = new int[256];
        int[] map2 = new int[256];
        int n = s.length();

        for (int i = 0; i < n; i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);
            if (map1[c1] != map2[c2])
                return false;
            map1[c1] = i + 1;
            map2[c2] = i + 1;
        }
        return true;
    }
}