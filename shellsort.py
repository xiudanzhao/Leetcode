def shellsort(l):
	length = len(l)
	inc = 0
	#步长序列1 4 13 40
	while inc <= length/3:
		inc = inc * 3 + 1
	print inc
	while inc >= 1:
		for i in range(inc,length):
			tmp = l[i]
			for j in range(i,0,-inc):
				if tmp < l[j-inc]:
					l[j] = l[j-inc]
				else:
					j += inc
					break
			l[j-inc]=tmp
		inc//=3
if __name__=='__main__':  
    seq=[8,6,4,9,7,3,2,-4,0,-10,-99] 
    print seq 
    shellsort(seq)  
    print seq		