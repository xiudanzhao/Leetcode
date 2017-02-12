#! /usr/bin/env python
# -*- coding: utf-8 -*-
class Solution(object):
    def twoSum(self, nums, target):
    
        #暴力方法,TLE
        nums_len=len(nums)
        i=0
        for num in nums:
            if i == nums_len-1:
                break
            j=i+1
            while(j<nums_len):
                if (nums[j] + num)==target:
                    return [i,j]
                else:
                    j =+ 1
                
            i =+ 1

    #用map
    def twoSum(self, num, target):
        dictMap = {}
        for index, value in enumerate(num):
            if target - value in dictMap:
                return dictMap[target - value]+1, index +1
            dictMap[value] = index




    #用双指针
    def twoSum(self, num, target):
        #必须先排序,然后才能知道左右指针往哪个方向移动
        sorted_num=sorted(num)
        left = 0
        right=len(num)-1
        while(right>left):
            if sorted_num[left]+sorted_num[right]==target:
                break
            else target>sorted_num[left]+sorted_num[right]:
                left =+ 1
            else target<sorted_num[left]+sorted_num[right]:
                right =- 1
        #大小排列可能有问题
        #return [num.index[sorted_num[left]]+1,num.index[sorted_num[right]]+1]
        pos1=num.index[sorted_num[left]]+1
        pos2=num.index[sorted_num[right]]+1
        return [min(pos1,pos2),max(pos1,pos2)]
