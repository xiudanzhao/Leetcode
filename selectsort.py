def selectsort(l):
	size = len(l)
	for i in range(0,size - 1):
		min = i
		for j in range(i+1,size):
			if l[min] > l[j]:
				min = j
		if min != i:
			l[min],l[i] = l[i],l[min]
if __name__=='__main__':  
    seq=[8,6,4,9,7,3,2,-4,0,-10,-99]  
    selectsort(seq)  
    print seq		
