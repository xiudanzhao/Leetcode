def insertsort(l):
	length = len(l)
	i = 1
	while i < length:
		tmp = l[i]
		for j in range(i,0,-1):
			if tmp < l[j - 1]:
				l[j] = l[j - 1]
			else:
				j += 1
				break
		l[j - 1] = tmp
		i += 1
		print l
if __name__=='__main__':  
    seq=[8,6,4,9,7,3,2,-4,0,-10,-99]  
    insertsort(seq)  
    print seq		