#include <stdio.h>
int main()
{
    int min, max, div;
    do
    {
        printf("Enter min:\n");
        scanf("%d", &min);
        printf("Enter max:\n");
        scanf("%d", &max);
        if (min > max)
        {
            printf("Invalid range. Please enter again!\n");
        }

    } while (min > max);
    do
    {
        printf("Enter div:\n");
        scanf("%d", &div);
        if (div == 0)
        {
            printf("Divior is zero. Please enter again!\n");
        }

    } while (div == 0);
    for (int i = min; i <= max; i++)
    {
        if (i % div == 0)
        {
            printf("i=%d\n", i);
        }
    }
    return 0;
}