def radixsort(l,r):
	for k in range(r):
		s = [[] for i in range(10)]
		for i in l:
			s[i/(10**k)%10].append(i)
		l = [a for b in s for a in b]
	return l
if __name__=='__main__':  
    seq=[94,12,34,76,26,9,0,37,55,76,37,5,68,83,90,37,12,65,76,49]  
    ans = radixsort(seq,2)  
    print ans