// Tổng số lẻ 1..n
// cslt: cộng dồn với vòng lặp
// YC: trả về tổng số lẻ trong [1..n]
// prototype: long long sum_odds_to_n(int n);
// VD I/O:
// Input:10->25
#include <stdio.h>
long long sum_odds_to_n(int n)
{
    long long sum = 0;
    for (int i = 1; i <= n; i += 2)
    {
        sum += i;
    }
    return sum;
}
int main()
{
    int n;
    printf("Nhap n: ");
    scanf("%d", &n);

    long long result = sum_odds_to_n(n);
    printf("Tong cac so le tu 1 den %d = %lld\n", n, result);
    return 0;
}