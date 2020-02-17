from django import forms
from . import models

class CommentForm(forms.ModelForm):
    class Meta:
        model = models.Comment
        fields = ['character', 'text']
        widgets = {
            'text': forms.TextInput(attrs={'class': 'input_text_size', 'id': 'input_text'}),
            'character': forms.Select(attrs={'class': 'input_text_size'})
        }
        labels = {
            'text': '',
            'character': ''
        }