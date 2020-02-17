from django.shortcuts import render
from django.http import HttpResponseRedirect
from comments import models, forms

# Create your views here.

def index(request):
    if request.method == 'POST':
        form = forms.CommentForm(request.POST)
        if form.is_valid():
            comment = models.Comment()
            comment.character = form.cleaned_data['character']
            comment.text = form.cleaned_data['text']
            comment.save()

            return HttpResponseRedirect('/')
    else:
        form = forms.CommentForm(auto_id=False)

    comments = models.Comment.objects.all()

    return render(request, 'page/index.html', {'comments': comments, 'comment_form': form})
