#include <iostream>
using namespace std;
class DaThuc
{
private:
    int n;
    float *a;

public:
    friend istream &operator>>(istream &is, DaThuc &x)
    {
        cout << "Nhap n :";
        is >> x.n;
        x.a = new float[x.n + 1];
        for (int i = 0; i <= x.n; i++)
        {
            cout << "a[" << i << "] : ";
            is >> x.a[i];
        }
        return is;
    }
    friend ostream &operator<<(ostream &os, DaThuc &x)
    {
        cout << "phuong trinh :" << endl;
        for (int i = 0; i <= x.n; i++)
        {
            if (i == 0)
            {
                os << x.a[i] << " + ";
            }

            else
            {
                if (i == x.n)
                {
                    os << x.a[i] << "X^" << i;
                }
                else
                    os << x.a[i] << "X^" << i << " + ";
            }
        }
        return os;
    }

    DaThuc operator+(DaThuc &x)
    {
        DaThuc y;
        int i;
        if (n > x.n)
            y.n = n;
        else
            y.n = x.n;
        y.a = new float[y.n + 1];
        for (i = 0; i <= y.n; i++)
        {
            if (i > n)
                y.a[i] = x.a[i];
            else if (i > x.n)
            {
                y.a[i] = a[i];
            }
            else
                y.a[i] = a[i] + x.a[i];
        }
        return y;
    }
    DaThuc &operator=(DaThuc &x)
    {
        n = x.n;
        a = new float[n + 1];
        for (int i = 0; i <= n; i++)
        {
            a[i] = x.a[i];
        }
        return *this;
    }
};
int main()
{
    DaThuc a, b;
    cout << "Nhap x: " << endl;
    cin >> a;
    cout << "Nhap y: " << endl;
    cin >> b;
    DaThuc c;
    c = a + b;
    cout << c;
    return 0;
}