# from django.shortcuts import render
# from .models import Post
#
# # Create your views here.
# def post_list(request):
#     return render(request, 'blog/post_list.html', {})
#

from django.shortcuts import render
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404
from .forms import PostForm
from django.shortcuts import redirect



def post_list(request):
    return render(request, 'blog/index.html')

def post_detail(request):

    return render(request, 'blog/index.html')

def post_order(request):

    return render(request, 'blog/order.html')
