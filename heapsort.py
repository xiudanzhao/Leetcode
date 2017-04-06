def maxHeapify(a,index,end):
	l = 2 * index + 1
	r = 2 * index + 2
	if l <= end and a[l] > a[index]:
		largest = l
	else:
		largest = index
	if r <= end and a[r] > a[largest]:
		largest = r
	if largest != index:
		a[index],a[largest] = a[largest],a[index]
		maxHeapify(a,largest,end)

def buildMaxHeap(a):
	for i in range(int((len(a)-1)/2),-1,-1):
		maxHeapify(a,i,len(a)-1)
def heapsort(a):
	buildMaxHeap(a)
	for end in range(len(a)-1,0,-1):
		a[0],a[end] = a[end],a[0]
		maxHeapify(a,0,end - 1)

if __name__ == '__main__':
	seq = [3, 1, 4, 9, 6, 7, 5, 8, 2, 10]
	print seq
	heapsort(seq)
	print seq