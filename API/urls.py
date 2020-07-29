from django.urls import path, re_path
from API import views
# from django.conf.urls import url

urlpatterns = [
    re_path(r'^appointments/$', views.appointments_list),
    re_path(r'^appointments/(?P<pk>[0-9]+)$', views.appointments_detail),
]