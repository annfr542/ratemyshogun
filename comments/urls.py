from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'comments', views.CommentViewSet)
router.register(r'love', views.LoveViewSet)

urlpatterns = [
        path('', include(router.urls)),
]