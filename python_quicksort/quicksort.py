unordered_list = [5, 7, 9, 12, 55, 123, 24, 13, 57, 36, 90]


def quick_sort(sorted_list):
    if len(sorted_list) <= 1:
        return sorted_list
    last = sorted_list[-1]
    left = [i for i in sorted_list[:-1] if i < last]
    right = [i for i in sorted_list[:-1] if i >= last]
    return quick_sort(left) + [last] + quick_sort(right)


print(quick_sort(unordered_list))