#include<stdio.h>

// Hàm đếm số chữ số của một số nguyên
int digit_count(long long n) {
    if (n == 0) return 1;      // Trường hợp đặc biệt
    if (n < 0) n = -n;         // Bỏ dấu âm

    int count = 0;
    while (n > 0) {
        n /= 10;
        count++;
    }
    return count;
}

int main() {
    long long n;
    printf("Nhap so nguyen: ");
    scanf("%lld", &n);

    printf("So chu so cua %lld la: %d\n", n, digit_count(n));

    return 0;
}

    


