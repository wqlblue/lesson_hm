
# def Merge(dict1, dict2):
#   # 使用 ** 操作符将字典 dict1 和 dict2 合并成一个新的字典
#   res = {**dict1, **dict2}  

#   return res

# # js 对象字面量  python 字典  key:value 键值对
# dict1 = {"name": "John Doe", "age": 25}
# dict2 = {"name": "Jone Doe", "city": "London"}
# dict3 = Merge(dict1, dict2)
# print(dict3)
def Merge(dict1, dict2):
    """
    合并两个字典，返回一个新的字典

    参数：
    dict1：字典，需要合并的第一个字典
    dict2：字典，需要合并的第二个字典

    返回：
    合并后的字典
    """
    # 使用 ** 操作符将字典 dict1 和 dict2 合并成一个新的字典
    res = {**dict1, **dict2}

    return res

# js 对象字面量  python 字典  key:value 键值对
dict1 = {"name": "John Doe", "age": 25}
dict2 = {"name": "Jone Doe", "city": "London"}
dict3 = Merge(dict1, dict2)
print(dict3)
