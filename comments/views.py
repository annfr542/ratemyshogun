from django.shortcuts import render
from rest_framework import viewsets
from .models import Comment, Love
from .serializers import CommentSerializer, LoveSerializer

class CommentViewSet(viewsets.ModelViewSet):
        queryset = Comment.objects.all().order_by('pub_date')
        serializer_class = CommentSerializer

class LoveViewSet(viewsets.ModelViewSet):
        queryset = Love.objects.all().order_by('pub_date')
        serializer_class = LoveSerializer
