def Merge(l1,l2):
	ans = []
	i = 0
	j = 0
	s1 = len(l1)
	s2 = len(l2)
	while i < s1 and j < s2:
		if l1[i] <= l2[j]:
			ans.append(l1[i])
			i += 1
		else:
			ans.append(l2[j])
			j += 1
	ans += l1[i:]
	ans += l2[j:]
	return ans
def MergeSort(l):
	if len(l) <= 1:
		return l
	#len(l)/2  竟然是字符串！！！
	mid = int(len(l)/2)
	left = MergeSort(l[:mid])
	print(left)
	right = MergeSort(l[mid:])
	print(right)
	return Merge(left,right)

if __name__ == '__main__':
	seq = [4,5,6,9,7,-2,-69,8,10]
	print(MergeSort(seq))