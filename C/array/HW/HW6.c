/*8) Min/Max mảng
Cơ sở lý thuyet:Duyệt một lan.
Yêu cau:Tı̀m min và max.
Prototype gợi ý :	void minmax(const int a[],int n,int	*minv, int *maxv);
Vı́	dụ	I/O:
[5,1,7]	→min=1,	max=7
*/
#include <stdio.h>
void minmax(const int a[], int n, int *minv, int *maxv)
{
    *minv = a[0];
    *maxv = a[0];
    for (int i = 0; i < n; i++)
    {
        if (a[i] < *minv)
        {
            *minv = a[i];
        }
        if (a[i] > *maxv)
        {
            *maxv = a[i];
        }
    }
}
int main(){
    int arr[] = {5,1,7};
    int n = sizeof(arr) / sizeof(arr[0]);
}