from .models import Comment, Love
from rest_framework import serializers

class CommentSerializer(serializers.ModelSerializer):
        class Meta:
                model = Comment
                fields = ['character', 'text']
        
class LoveSerializer(serializers.ModelSerializer):
        class Meta:
                model = Love
                fields = ['group', 'text']