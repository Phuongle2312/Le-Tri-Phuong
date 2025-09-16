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
    printf("Nhap ho va ten: ");
    fgets(x.name, sizeof(x.name), stdin);
    x.name[strcspn(x.name, "\n")] = '\0'; // xóa ký tự xuống dòng

    printf("Nhap tuoi: ");
    scanf("%d", &x.age);

    printf("Nhap diem: ");
    scanf("%f", &x.score);

    printf("Nhap chieu cao: ");
    scanf("%f", &x.height);

    printf("Nhap ngay sinh (dd mm yyyy): ");
    scanf("%d %d %d", &x.birthday.day, &x.birthday.month, &x.birthday.year);

    while (getchar() != '\n')
        ; // xóa buffer
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

    int n;
    printf("Nhap so luong sinh vien: ");
    scanf("%d", &n);
    while (getchar() != '\n')
        ; // tránh lỗi khi nhập tên

    for (int i = 0; i < n; i++)
    {
        printf("\n--- Nhap thong tin sinh vien thu %d ---\n", i + 1);
        cls.std[cls.count] = nhap();
        cls.count++;
    }

    printf("\n====== DANH SACH SINH VIEN ======\n");
    for (int i = 0; i < cls.count; i++)
    {
        printf("Sinh Vien %d:\n", i + 1);
        printf("Ho va Ten: %s\n", cls.std[i].name);
        printf("Tuoi: %d\n", cls.std[i].age);
        printf("Diem: %.2f\n", cls.std[i].score);
        printf("Chieu Cao: %.2f\n", cls.std[i].height);
        printf("Ngay Sinh: %02d/%02d/%d\n", cls.std[i].birthday.day, cls.std[i].birthday.month, cls.std[i].birthday.year);
        printf("\n");
    }

    return 0;
}
