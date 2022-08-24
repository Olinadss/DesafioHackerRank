list_sales = [10, 20, 20, 10, 10, 30, 50, 10, 20]

n = len(list_sales)


def sockMerchant(n, ar):
    count_sales = dict()

    cout_match = 0

    for sales in ar:
        if sales not in count_sales:
            count_sales[sales] = 1
        else:
            count_sales[sales] += 1

    for sales in count_sales.values():
        cout_match += sales // 2

    return cout_match


print(sockMerchant(n, list_sales))
