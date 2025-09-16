// viết 1 hàm tìm giá trị lớn nhất và nhỏ nhất.
#include <stdio.h>
int findMax(int arr[], int n)
{
    int max = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
int findMin(int arr[], int n)
{
    int min = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}
void findMinMax(int n, int arr[], int *min, int *max)
{
    *min = *max = arr[0];
    for (int i = 0; i < n; i++)
    {
        if (*min > arr[i])
        {
            *min = arr[i];
        }
        if (*max < arr[i])
        {
            *max = arr[i];
        }
    }
}
int main()
{
    int arr[] = {1, 10, -5, 96, 22};
    int min, max = 0;
    
}