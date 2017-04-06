def bucketsort(l,r):
	b = [0 for i in range(r)]
	for i in l:
		b[i-1] += 1
	ans = []
	i = 1
	for item in b:
		if item:
			ans += [i for j in range(item)]
		i += 1
	return ans
if __name__=='__main__':  
    seq=[8,6,4,9,7,3,2,4,0,10,9]  
    ans = bucketsort(seq,10)  
    print ans	

