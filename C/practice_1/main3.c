// 9. Nhậ p và o n, in ra tổ ng cá c số chẵ n từ 1 đến n.
// Các việc cần làm:
// 1. Khai báo biến n, sum và nhập vào giá trị cho n.
// 2  Duyệt các số từ 1 đến n.
// 3. Kiểm tra số đó có là số chẵn hay không?
// 4. Nếu là số chẵn thì cộng vào tổng.
// 5. Kết thúc vòng lặp in ra tổng.

#include <stdio.h>
int main()
{
    int n;
    int sum;
    printf("Enter n \n");
    scanf("%d", &n);
    sum =0;
    for (int i = 1; i <= n; i++)
    {
        if (i % 2 == 0)
        {
            sum = sum + i;
        }
    }
    printf("Summary = %d", sum);//2 4 6 8 10
}