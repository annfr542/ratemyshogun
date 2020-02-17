# Generated by Django 3.0.3 on 2020-02-16 22:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('character', models.CharField(choices=[('BU', 'Bukko'), ('HO', 'Hojo'), ('KE', 'Kejsaren'), ('LA', 'Lapsang'), ('ME', 'Mentorn'), ('MP', 'Marco Polo'), ('TO', 'Tomoe')], max_length=2)),
                ('text', models.CharField(max_length=500)),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
    ]
