#include <stdio.h>
// Hàm tính giai thừa bằng vòng lặp
long long fact_inter(int n)
{
    if (n < 0)

        return -1; // không xác định với số âm
    long long result = 1;
    for (int i = 0; i <= n; i++)
    {
        result *= i;
    }
    return result;
}
int main()
{
    int n;
    printf("Nhap n:");
    scanf("%d", &n);

    if (n < 0)
    {
        printf("Khong tinh giai thua cho so am!\n");
    }
    else
    {
        printf("%d!= %lld\n", n, fact_inter(n));
    }
    return 0;
}
