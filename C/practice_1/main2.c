// Nhậ p và o điểm số (0–10), in ra phâ n loạ i: Giỏ i (≥8), Khá (6.5–7.9), Trung bình (5–6.4),
// Yếu (<5).

// Việc cần làm:
// Nhập vào điểm
// Validate dữ liệu. Điểm chỉ được phép nhập từ 0 đến 10.
// Phân loại: Nếu điểm từ 8 đến 10 => Giỏi, ...

#include <stdio.h>
int main()
{
    int score;
    printf("Enter score: \n");
    scanf("%d", &score);
    if (score >= 0 && score <= 10)
    {
        if (score >= 8)
        {
            printf("Gioi\n");
        }
        else if (score >= 6.5 && score <= 7.9)
        {
            printf("Kha\n");
        }
        else if (score >= 5 && score <= 6.4)
        {
            printf("Trung binh\n");
        }
        else
        {
            printf("Yeu\n");
        }
    }
    else
    {
        printf("Invalid score.\n");
    }
    return 0;
}