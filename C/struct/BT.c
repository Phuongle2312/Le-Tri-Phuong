#include <stdio.h>
#include <string.h>
struct date
{
    int day, month, year;
};
struct Student
{
    char name[30];
    int age;
    int ID;
    float score;
    float height;
    struct date birthday;
};
struct Student nhap()
{
    struct Student x;
    fgets(x.name, sizeof(x.name), stdin);
    x.name[strcspn(x.name, "\n")] = '\0';
    scanf("%d", &x.age);
    scanf("%d", &x.ID);
    scanf("%f", &x.score);
    scanf("%f", &x.height);
    scanf("%d", &x.birthday.day);
    scanf("%d", &x.birthday.month);
    scanf("%d", &x.birthday.year);
    while (getchar() != '\n')
        ;

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

    struct Student sv1 = nhap();
    cls.std[cls.count] = sv1;
    cls.count++;

    struct Student sv2 = nhap();
    cls.std[cls.count] = sv2;
    cls.count++;

    for (int i = 0; i < cls.count; i++)
    {
        printf("Thong tin sinh vien: \n");
        printf("Ho va ten: %s\n", cls.std[i].name);
        printf("Ma sinh vien: %d\n", cls.std[i].ID);
        printf("Diem so: %f\n", cls.std[i].score);
        printf("Chieu cao: %f\n", cls.std[i].height);
        printf("Ngay thang nam sinh: %d %d %d\n", cls.std[i].birthday.day, cls.std[i].birthday.month, cls.std[i].birthday.year);
        printf("\n");
    }
    printf("Tong so sinh vien trong lop T2508M: %d", cls.count);
    return 0;
}
