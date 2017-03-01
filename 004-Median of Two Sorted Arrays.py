#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2017-02-14 19:05:37

class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        if (len(nums1)+len(nums2)) % 2 ==1:
            return self.findKthSortedArrays(nums1,nums2,(len(nums1)+len(nums2))/2+1)
        else:
            return (self.findKthSortedArrays(nums1,nums2,(len(nums1)+len(nums2))/2+1)+self.findKthSortedArrays(nums1,nums2,(len(nums1)+len(nums2))/2))/2.0
        
    def findKthSortedArrays(self,A,B,K):
        if len(A) < len(B):
            temp = A
            A = B
            B = temp
        if len(B) == 0:
            return A[K-1]
        if K == 1:
            return min(A[0],B[0])
            
        pb=min(K/2,len(B))
        pa=K-pb
        
        if A[pa-1] > B[pb-1]:
            return self.findKthSortedArrays(A,B[pb:],K-pb)
        elif A[pa-1] < B[pb-1]:
            return self.findKthSortedArrays(A[pa:],B,K-pa)
        else:
            return A[pa-1]
            
            
            
