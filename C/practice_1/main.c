#include <stdio.h>
int main()
{
    //     int age;
    //     printf("Enter students age\n");
    //     scanf("%d", &age);
    //     if (age > 0 && age < 130)
    //     {
    //         if (age >= 15)
    //         {
    //             printf("Du tuoi vao lop 10");
    //         }

    //     else
    //     {
    //         printf("Chua du tuoi vao hoc");
    //     }
    // }
    // else
    // {
    //     printf("Tuoi khong hop le");
    // }
    //     return 0;

    // nhập vào điểm số (0-10)

    // việc cần làm:
    // nhập vào điểm
    // Validate dữ liệu. điểm chỉ được phép nhập từ 0 đến 10
    // phân loại: Nếu điểm từ 8 đến 10 =>Giỏi,..
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