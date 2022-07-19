function find(decimal_number)
{
    if (decimal_number == 0)
        return 0;
    else
        return ((decimal_number % 2) + 10*
                find(Math.floor(decimal_number / 2)));
}
console.log(find(156))