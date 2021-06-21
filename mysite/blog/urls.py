from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('index/', views.post_detail, name='post_detail'),
    path('order/', views.post_order, name='post_order'),


]
