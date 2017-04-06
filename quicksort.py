def quicksort(l):
	if len(l) < 1:
		return l
	else:
		povit = l[0]
		lesser = quicksort([x for x in l[1:] if x < povit])
		greater = quicksort([x for x in l[1:] if x > povit])
		return lesser + [povit]+ greater
if __name__=='__main__':  
    seq=[8,6,4,9,7,3,2,-4,0,-10,-99]  
    ans = quicksort(seq)  
    print ans	
