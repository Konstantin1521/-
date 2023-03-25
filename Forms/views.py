from django.shortcuts import render

def home_str(request):
    context = {'title': 'Форум про программирование'}
    return render(request, 'forms/index.html', context)


def forum_str(request):
    context = {'title': 'Самый лучший форум'}
    return render(request, 'forms/forum.html')
