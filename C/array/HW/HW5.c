/*7) Đếm dương/âm/zero
Cơ	sở	lý	thuyet:	Duyệt	mảng và phân loại.
Yêu cau: In dương,	â m, zero(chưa	học con trỏ có the in trực tiep).
Prototype	gợi ý :void count_sign(const int a[],	int	n);
Vı́	dụ	I/O:
[-2,0,5] → pos=1,neg=1,zero=1
*/
#include <stdio.h>
void count_sign(const int a[], int n)
{
    int pos = 0;
    int neg = 0;
    int zero = 0;
    for (int i = 0; i < n; i++)
    {
        if (a[i] > 0)
        {
            pos++;
        }
        else if (a[i] < 0)
        {
            neg++;
        }
        else
        {
            zero++;
        }
    }
    printf("pos=%d, neg=%d, zero=%d", pos, neg, zero);
}
int main()
{
    int arr[] = {-2, 0, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    count_sign(arr, n);

    return 0;
}