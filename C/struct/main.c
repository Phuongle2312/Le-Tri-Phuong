#include <stdio.h>
#include <string.h>

struct date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[30];
    int age;
    float score;
    float height;
    struct date birthday;
};

struct Student nhap()
{
    struct Student x;
    fgets(x.name, sizeof(x.name), stdin);
    x.name[strcspn(x.name, "\n")] = '\0'; // bỏ ký tự xuống dòng nếu có
    scanf("%d", &x.age);
    scanf("%f", &x.score);
    scanf("%f", &x.height);
    scanf("%d", &x.birthday.day);
    scanf("%d", &x.birthday.month);
    scanf("%d", &x.birthday.year);
    while (getchar() != '\n'); // xóa ký tự xuống dòng
    return x;
};

struct MyClass
{
    struct Student std[100];
    int count;
};

typedef struct MyClass class;

int main()
{
    class cls;
    cls.count = 0;

    // Them Sinh Vien thu nhat
    struct Student sv1 = nhap();
    cls.std[cls.count] = sv1;
    cls.count++;

    // Them Sinh Vien Thu 2
    struct Student sv2 = nhap();
    cls.std[cls.count] = sv2;
    cls.count++;

    for (int i = 0; i < cls.count; i++)
    {
        printf("Thong Tin Sinh Vien: \n");
        printf("Ho va Ten: %s\n", cls.std[i].name);
        printf("Tuoi: %d\n", cls.std[i].age);
        printf("Diem: %f\n",cls.std[i].score);
        printf("Chieu Cao: %.2f\n", cls.std[i].height);
        printf("Ngay Sinh: %d/%d/%d\n", cls.std[i].birthday.day, cls.std[i].birthday.month, cls.std[i].birthday.year);
        printf("\n");
    }
    printf("So sinh vien trong lop T2508M: %d", cls.count);
    return 0;
}