
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from blog.views import BlogView
from rest_framework import routers

route=routers.DefaultRouter()
route.register('',BlogView, basename='blogview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blogs/',include(route.urls))
    
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
